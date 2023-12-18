import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import SceneLayer from '@arcgis/core/layers/SceneLayer';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import {
  MeshSymbol3D,
  FillSymbol3DLayer,
  LineSymbol3D,
  PathSymbol3DLayer,
  LabelSymbol3D,
  TextSymbol3DLayer,
} from '@arcgis/core/symbols';
import SolidEdges3D from '@arcgis/core/symbols/edges/SolidEdges3D';

/* Station point layer */
var labelClass = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: '#d4ff33',
        },
        size: 15,
        halo: {
          color: 'black',
          size: 0.5,
        },
        font: {
          family: 'Ubuntu Mono',
          //weight: "bold"
        },
      }),
    ],
    verticalOffset: {
      screenLength: 100,
      maxWorldLength: 700,
      minWorldLength: 80,
    },

    callout: {
      type: 'line', // autocasts as new LineCallout3D()
      color: [128, 128, 128, 0.5],
      size: 0.2,
      border: {
        color: 'grey',
      },
    },
  }),
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: '$feature.Station',
    //value: "{TEXTSTRING}"
  },
});

export const stationLayer = new FeatureLayer({
  portalItem: {
    id: 'c34277793d164f248abb0926963ae92d',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  title: 'Station',
  labelingInfo: [labelClass],
  definitionExpression: "Project = 'MMSP'",
  elevationInfo: {
    mode: 'relative-to-ground',
  },
});
stationLayer.listMode = 'hide';

// * Viaduct * //
const tbmColor = {
  1: [225, 225, 225, 0.5], // To be Constructed (white), original: [225, 225, 225, 0.1]
  //1: "#ffffff",
  2: [232, 54, 24, 1], // Excavated
  3: [0, 112, 255, 0.8], // Completed
};

export const tbmDelayedRenderer = new UniqueValueRenderer({
  field: 'delayed',
  uniqueValueInfos: [
    {
      value: 1,
      label: 'Delayed Segment',
      symbol: new LineSymbol3D({
        symbolLayers: [
          new PathSymbol3DLayer({
            profile: 'circle',
            material: {
              color: [255, 0, 0, 0.5],
            },
            width: 5,
            height: 5,
            join: 'miter',
            cap: 'butt',
            anchor: 'bottom',
            profileRotation: 'all',
          }),
        ],
      }),
    },
  ],
});

export const tbmStatusRenderer = new UniqueValueRenderer({
  field: 'status',
  uniqueValueInfos: [
    {
      value: 1,
      label: 'To be Constructed',
      symbol: new LineSymbol3D({
        symbolLayers: [
          new PathSymbol3DLayer({
            profile: 'circle',
            material: {
              color: tbmColor[1],
            },
            width: 5,
            height: 5,
            join: 'miter',
            cap: 'butt',
            anchor: 'bottom',
            profileRotation: 'all',
          }),
        ],
      }),
    },
    {
      value: 2,
      label: 'Excavating (Cutter Head)',
      symbol: new LineSymbol3D({
        symbolLayers: [
          new PathSymbol3DLayer({
            profile: 'circle',
            material: {
              color: tbmColor[2],
            },
            width: 5,
            height: 5,
            join: 'miter',
            cap: 'butt',
            anchor: 'bottom',
            profileRotation: 'all',
          }),
        ],
      }),
    },
    {
      value: 3,
      label: 'Segmented',
      symbol: new LineSymbol3D({
        symbolLayers: [
          new PathSymbol3DLayer({
            profile: 'circle',
            material: {
              color: tbmColor[3],
            },
            width: 5,
            height: 5,
            join: 'miter',
            cap: 'butt',
            anchor: 'bottom',
            profileRotation: 'all',
          }),
        ],
      }),
    },
  ],
});

export const tbmTunnelLayer = new FeatureLayer({
  portalItem: {
    id: '6992715c99d04df28fb93ca9ee9d2b5f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  elevationInfo: {
    mode: 'absolute-height',
    offset: -2,
  },
  hasZ: true,
  renderer: tbmStatusRenderer,
  title: 'TBM Tunnel Segment',
  outFields: ['*'],
  popupTemplate: {
    title: 'Ring No.: <b>{segmentno}</b> (<b>{line}</b>)',
    lastEditInfoEnabled: false,
  },
});

/* Station Structure */
const colorStationStructure = [
  [225, 225, 225, 0], // To be Constructed (white)
  [130, 130, 130, 0.3], // Under Construction
  [255, 0, 0, 0.6], // Delayed
  [0, 197, 255, 0.5], // Completed
];

function renderStationStructureLayer() {
  const renderer = new UniqueValueRenderer({
    field: 'Status',
  });

  for (var i = 0; i < colorStationStructure.length; i++) {
    renderer.addUniqueValueInfo({
      value: i + 1,
      symbol: new MeshSymbol3D({
        symbolLayers: [
          new FillSymbol3DLayer({
            material: {
              color: colorStationStructure[i],
              colorMixMode: 'replace',
            },
            edges: new SolidEdges3D({
              color: [225, 225, 225, 0.3],
            }),
          }),
        ],
      }),
    });
  }
  stationStructureLayer.renderer = renderer;
}

export const stationStructureLayer = new SceneLayer({
  //structureLayer
  portalItem: {
    id: '1f03030cd36c4d83880427354fc05c66',
  },
  popupTemplate: {
    title: '<h5>{Status}</h5>',
    lastEditInfoEnabled: false,
    outFields: ['*'],
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'Type',
            label: 'Type of Structure',
          },
          {
            fieldName: 'ID',
            label: 'Structure ID',
          },
          {
            fieldName: 'Status',
            label: 'Construction Status',
          },
        ],
      },
    ],
  },
  elevationInfo: {
    mode: 'absolute-height',
    offset: 0,
  },
  title: 'Station Structure',
  // when filter using date, example below. use this format
  //definitionExpression: "EndDate = date'2020-6-3'"
});
stationStructureLayer.listMode = 'hide';

renderStationStructureLayer();

export const stationStructureLayerForDropDown = new SceneLayer({
  //structureLayer
  portalItem: {
    id: '1f03030cd36c4d83880427354fc05c66',
  },
  definitionExpression: 'Type = 1',
});
