import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
interface Airport {
  name: string;
  city: string;
  country: string;
  iata_code: string;
  _geoloc: {
    lat: number;
    lng: number;
  };
  links_count: number;
  objectID: string;
}
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

    isDropdownVisible = false;
    selectedLocation: string = '';
    selectLocation: string = '';

  departureLocations: Airport[] = []; //khởi tạo mảng để chưa dữ liệu sân bay
  filteredLocations: Airport[] = []; 
constructor(private dataService: DataService){}

ngOnInit() {
  //Gọi service để tải tài liệu json khi component được khởi tạo
  this.dataService.getJsonData().subscribe(data => {
    this.departureLocations = data;
  });
}

onInputChange(value: string) {
  this.filteredLocations = this.departureLocations.filter(
    location => location.name.toLowerCase().startsWith(value.toLowerCase())
  );
}

  toggleDropdown(){
    this.isDropdownVisible =!this.isDropdownVisible;
  }
  submitLocation(){
    console.log('Selected location: ', this.selectedLocation);
  }









//   constructor(public dialog: MatDiaLog){}
//   openDeparttureDialog(): void {
//     const dialogRef = this.dialog.open(DepartureDialogComponent, {
//       width: '250px',
//       data: { placeholder: 'Enter departure location' }
//   });

//   dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       if (result) {
//           // Xử lý và hiển thị gợi ý từ JSON
//           const suggestions = this.getDepartureSuggestions(result);
//           console.log('Suggestions:', suggestions);
//       }
//   });
// }

// getDepartureSuggestions(inputValue: string): string[] {
//   // Đọc dữ liệu từ tệp JSON (có thể sử dụng HTTP service nếu JSON ở xa)
//   const jsonData = {
//       "departure_locations": ["City A", "City B", "City C", "City D", "City E"]
//   };

//   // Lọc dữ liệu dựa trên giá trị nhập
//   const filteredSuggestions = jsonData.departure_locations.filter(location => {
//       return location.toLowerCase().includes(inputValue.toLowerCase());
//   });

//   return filteredSuggestions;
// }
  
}
