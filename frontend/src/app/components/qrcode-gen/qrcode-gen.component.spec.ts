import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeGenComponent } from './qrcode-gen.component';

describe('QrcodeGenComponent', () => {
  let component: QrcodeGenComponent;
  let fixture: ComponentFixture<QrcodeGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrcodeGenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrcodeGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
