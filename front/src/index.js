import { Map, NavigationControl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import {
	MaplibreExportControl,
	Size,
	PageOrientation,
	Format,
	DPI
} from '@watergis/maplibre-gl-export';

import style from './osmt-kumejima.json' // change style here

// TODO：pmtilesとして読み込むには、pmtiles://のようなプロトコルを付ける必要がある
const map = new Map({
	container: 'map',
	style: style,
});
map.addControl(new NavigationControl({}), 'top-right');
map.addControl(
	new MaplibreExportControl({
		PageSize: Size.A3,
		PageOrientation: PageOrientation.Portrait,
		Format: Format.PNG,
		DPI: DPI[96],
		Crosshair: true,
		PrintableArea: true,
		Local: 'en'
	}),
	'top-right'
);