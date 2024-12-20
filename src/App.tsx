/* eslint-disable react/jsx-no-comment-textnodes */
import { useRef, useEffect, useState } from 'react';
import { map, view, basemaps, layerList } from './Scene';
import Select from 'react-select';
import './index.css';
import './App.css';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-switch';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-tabs';
import '@esri/calcite-components/dist/components/calcite-panel';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
  CalciteSwitch,
  CalciteTabs,
  CalcitePanel,
  CalciteList,
  CalciteListItem,
} from '@esri/calcite-components-react';
import Chart from './components/Chart';
import ProgressChart from './components/ProgressChart';
import { DropDownData } from './customClass';
import { stationStructureLayer, stationStructureLayerForDropDown } from './layers';
import { dateUpdate } from './Query';

function App() {
  const [asOfDate, setAsOfDate] = useState<undefined | any | unknown>(null);

  const mapDiv = useRef(null);
  const layerListDiv = useRef<HTMLDivElement | undefined | any>(null);

  // For Calcite Design
  const calcitePanelBasemaps = useRef<HTMLDivElement | undefined | any>(null);
  const [activeWidget, setActiveWidget] = useState<undefined | any | unknown>(null);
  const [nextWidget, setNextWidget] = useState<undefined | any | unknown>(null);

  // Calcite switch for see-through-ground
  const [underground, setUnderground] = useState<boolean>(false);

  // For dropdown filter
  const [initStations, setInitStations] = useState<null | undefined | any>();
  const [stationSelected, setStationSelected] = useState<null | any>(null);

  //
  const [stationStructureLayerLoaded, setStationStructureLayerLoaded] = useState<any>();
  useEffect(() => {
    stationStructureLayer.load().then(() => {
      setStationStructureLayerLoaded(stationStructureLayer.loadStatus);
    });
  });

  //**** Create dropdonw list */
  useEffect(() => {
    const dropdownData = new DropDownData({
      featureLayers: [stationStructureLayerForDropDown],
      fieldNames: ['Station1'],
    });

    dropdownData.dropDownQuery().then((response: any) => {
      setInitStations(response);
    });

    dateUpdate().then((response: any) => {
      setAsOfDate(response);
    });
  }, []);

  useEffect(() => {
    if (activeWidget) {
      const actionActiveWidget = document.querySelector(
        `[data-panel-id=${activeWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionActiveWidget.hidden = true;
    }

    if (nextWidget !== activeWidget) {
      const actionNextWidget = document.querySelector(
        `[data-panel-id=${nextWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionNextWidget.hidden = false;
    }
  });

  const handleMunicipalityChange = (obj: any) => {
    setStationSelected(obj);
  };

  useEffect(() => {
    map.ground.opacity = underground === true ? 0 : 0.7;
    view.environment.atmosphereEnabled = false;
  }, [underground]);

  useEffect(() => {
    if (mapDiv.current) {
      map.ground.navigationConstraint = {
        type: 'none',
      };

      view.container = mapDiv.current;
      view.ui.components = [];
      view.ui.empty('top-left');
      basemaps.container = calcitePanelBasemaps.current;
      layerList.container = layerListDiv.current;
    }

    map.ground.opacity = 0.5;
  }, []);

  // Style CSS
  const customstyles = {
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isFocused ? '#999999' : isSelected ? '#2b2b2b' : '#2b2b2b',
        color: '#ffffff',
      };
    },

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: '#2b2b2b',
      borderColor: '#949494',
      height: 35,
      width: '170px',
      color: '#ffffff',
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: '#fff' }),
  };

  return (
    <>
      <CalciteShell>
        <CalciteTabs slot="panel-end" style={{ width: '25vw' }}>
          {stationStructureLayerLoaded === 'loaded' && (
            <Chart stationname={stationSelected === null ? '' : stationSelected.field1} />
          )}
        </CalciteTabs>
        <header
          slot="header"
          id="header-title"
          style={{ display: 'flex', width: '100%', padding: '0 1rem' }}
        >
          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/DOTr_Logo_v2.png"
            alt="DOTr Logo"
            height={'2.9%'}
            width={'2.9%'}
            style={{ marginBottom: 'auto', marginTop: 'auto' }}
          />
          <b className="headerTitle">MMSP STATION</b>
          <div className="date">{!asOfDate ? '' : 'As of ' + asOfDate}</div>

          <div className="dropdownFilter">
            <div className="dropdownFilterLayout">
              <b style={{ color: 'white', margin: 10, fontSize: '0.9vw' }}>Station</b>
              <Select
                placeholder="Select Station"
                value={stationSelected}
                options={initStations}
                onChange={handleMunicipalityChange}
                getOptionLabel={(x: any) => x.field1}
                styles={customstyles}
              />
            </div>
          </div>

          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/MMSP.png"
            alt="GCR Logo"
            height={'4.4%'}
            width={'4.4%'}
            style={{
              marginBottom: 'auto',
              marginTop: 'auto',
              marginLeft: 'auto',
              marginRight: '5rem',
            }}
          />
        </header>
        {/* Calcite Action Panel */}
        <CalciteShellPanel
          width-scale="1"
          slot="panel-start"
          position="start"
          id="left-shell-panel"
          displayMode="dock"
        >
          <CalciteActionBar slot="action-bar">
            <CalciteAction
              data-action-id="layers"
              icon="layers"
              text="layers"
              id="layers"
              //textEnabled={true}
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="basemaps"
              icon="basemap"
              text="basemaps"
              id="basemaps"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="charts"
              icon="graph-time-series"
              text="Progress Chart"
              id="charts"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="information"
              icon="information"
              text="Information"
              id="information"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>
          </CalciteActionBar>

          <CalcitePanel
            heading="Layers"
            height-scale="l"
            width-scale="l"
            data-panel-id="layers"
            style={{ width: '18vw' }}
            hidden
          >
            <div id="layers-container" ref={layerListDiv}></div>
          </CalcitePanel>

          <CalcitePanel
            heading="Basemaps"
            height-scale="l"
            data-panel-id="basemaps"
            style={{ width: '18vw' }}
            hidden
          >
            <div id="basemap-container" ref={calcitePanelBasemaps}></div>
          </CalcitePanel>

          <CalcitePanel
            class="timeSeries-panel"
            height-scale="l"
            data-panel-id="charts"
            hidden
          ></CalcitePanel>

          <CalcitePanel heading="Description" data-panel-id="information" hidden>
            {nextWidget === 'information' ? (
              <div className="informationDiv">
                <ul>
                  <li>
                    You can <b>filter utility data</b> by station.
                  </li>
                  <br />
                  <li>
                    <b>Click the bar-chart series</b> to view its corresponding progress on the map.
                  </li>
                  <br />
                  <li>
                    Click/unclick widgets icon for viewing Layer list, basemaps and monthly progress
                    chart.
                  </li>
                </ul>
              </div>
            ) : (
              <div className="informationDiv" hidden></div>
            )}
          </CalcitePanel>
        </CalciteShellPanel>
        <div
          className="groundSwitchDiv"
          style={{
            position: 'fixed',
            zIndex: 1,
            bottom: 10,
            right: '23%',
            color: 'white',
            backgroundColor: '#2b2b2b',
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          Ground: {''}
          On{' '}
          <CalciteSwitch
            onCalciteSwitchChange={(event: any) => setUnderground(event.target.checked)}
          ></CalciteSwitch>{' '}
          Off
        </div>

        <div className="mapDiv" ref={mapDiv}></div>

        {/* progress chart is loaded ONLY when charts widget is clicked. */}
        {nextWidget === 'charts' && nextWidget !== activeWidget ? (
          <ProgressChart contractp={stationSelected === null ? '' : stationSelected.name} />
        ) : (
          ''
        )}
      </CalciteShell>
    </>
  );
}

export default App;
