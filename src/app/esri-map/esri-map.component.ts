import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from "@angular/core";
import Map from "arcgis-js-api/Map";
import MapView from "arcgis-js-api/views/MapView";

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.scss']
})
export class EsriMapComponent implements OnInit {

  @ViewChild("mapViewNode", { static: true }) private mapViewEl: ElementRef;
  view: any;

  constructor() {}

  async initializeMap() {
    try {
      // Configure the Map
      const mapProperties = {
        basemap: "streets"
      };

      const map = new Map(mapProperties);

      // Initialize the MapView
      const mapViewProperties = {
        container: this.mapViewEl.nativeElement,
        center: [0.1278, 51.5074],
        zoom: 10,
        map: map
      };

      this.view = new MapView(mapViewProperties);
      return this.view;
    } catch (error) {
      console.log("Esri: ", error);
    }
  }

  ngOnInit() {
    this.initializeMap();
  }

  ngOnDestroy() {
    if (this.view) {
      // destroy the map view
      this.view.container = null;
    }
  }
}
