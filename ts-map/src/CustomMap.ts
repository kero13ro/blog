export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 8,
      center: {
        lat: 24,
        lng: 121
      }
    });
  }
}
