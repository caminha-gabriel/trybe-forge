class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string | undefined;

  constructor(_brand: string, _size: number, _resolution: string, _connections: string[], _connectedTo?: string) {
    this._brand = _brand;
    this._size = _size;
    this._resolution = _resolution;
    this._connections = _connections;
    this._connectedTo = _connectedTo;
  }

  turnOn() {
    console.log(this._brand, this._size, this._resolution, this._connections, this._connectedTo);
  }

  get connectedTo() {
    if (this._connectedTo) {
      return this._connectedTo;
    }
    return '';
  }

  set connectedTo(newValue: string) {
    if (this._connections.find((connection) => connection === newValue)) {
      this._connectedTo = newValue;
    } else {
      console.log('Sorry, connection unavailable');
      
    }
  }
}

const tv1 = new Tv('samsung', 32, '1440p', ['hdmi', 'ethernet']);

tv1.connectedTo = 'ds';
console.log('log 1', tv1.connectedTo);

tv1.connectedTo = 'ethernet';
console.log('log 2', tv1.connectedTo);

tv1.connectedTo = 'hdmi';
console.log('log 3', tv1.connectedTo);



