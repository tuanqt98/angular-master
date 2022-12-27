import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() progress = 50;
  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'tomato';

  constructor() {
    console.log({
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor
    });
    //chưa bind input, chưa nhận được giá trị từ bên ngoài truyền vào
  }

  ngOnInit(): void {
    console.log('ngOnInit', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor
    });
    //Phát hiện được thay đổi input và chỉ chạy 1 lần duy nhất
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChange', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor
    });
    //chạy trc ngOnInit - chạy mỗi khi có thay sự thay đổi- nên sd ngOnChange để validations
  }
}
