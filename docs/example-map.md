---
title: Example map
---

# Leaflet Examples

[Observable Framework](https://observablehq.com/framework/) is an open source static site generator for data apps.

[Protomaps](https://github.com/protomaps) is an [open source](https://protomaps.com/blog/open-core-to-open-source/) static site generator for maps.

Let's use them together!

```js
import * as L from "npm:leaflet";
import * as protomapsL from "npm:protomaps-leaflet@2.0.1";
```

Just a sharp basemap built from OpenStreetMap, using Leaflet, with vector tiles loaded from [api.protomaps.com (API key required).](https://protomaps.com/other)

# Basic: API

```js
const center = [38,-100];
const zoom = 4;
```

```js
const div = display(document.createElement("div"));
div.style = "height: 400px;";
const map = L.map(div).setView(center,zoom);
var layer = protomapsL.leafletLayer({url:'https://api.protomaps.com/tiles/v3/{z}/{x}/{y}.mvt?key=1003762824b9687f',theme:'light'})
layer.addTo(map);
```

# Basic: No API

The same map, but reading from a [single PMTiles basemap archive](https://beta.source.coop/repositories/protomaps/openstreetmap/description/) hosted on [Source Cooperative](https://source.coop). No API keys needed, no tileserver needed! CORS required, though. Each tile is loaded via HTTP Range Requests.

```js
const div = display(document.createElement("div"));
div.style = "height: 400px;";
const map = L.map(div).setView(center,zoom);
var layer = protomapsL.leafletLayer({url:'https://data.source.coop/protomaps/openstreetmap/tiles/v3.pmtiles', theme:'light'})
layer.addTo(map);
```

# Themes

Client-side rendered map means we can have... dark mode!

```js
const div = display(document.createElement("div"));
div.style = "height: 400px;";
const map = L.map(div).setView(center,zoom);
var layer = protomapsL.leafletLayer({url:'https://api.protomaps.com/tiles/v3/{z}/{x}/{y}.mvt?key=1003762824b9687f', theme:'dark'})
layer.addTo(map);
```

# Tiled Data Loading

Overlaying a 20 megabyte PMTiles archive in the Observable Framework's `data/` dir. Each tile is loaded via HTTP Range Requests.

```js
const areas = FileAttachment("data/cb_2018_us_zcta510_500k_nolimit.pmtiles");
const div = display(document.createElement("div"));
div.style = "height: 400px;";
const map = L.map(div).setView(center,zoom);
var baseLayer = protomapsL.leafletLayer({url:'https://api.protomaps.com/tiles/v3/{z}/{x}/{y}.mvt?key=1003762824b9687f', theme:'dark'})
baseLayer.addTo(map);
var layer = protomapsL.leafletLayer({url:areas._url, maxDataZoom:7, paintRules: [
  {
      dataLayer: "zcta",
      symbolizer: new protomapsL.PolygonSymbolizer({
          fill:"steelblue",
          opacity: 1,
          width: 0.2,
          stroke: "cyan"
      })
  }
]})
layer.addTo(map);
```
