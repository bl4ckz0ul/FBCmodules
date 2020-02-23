import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mod1Page } from './mod1.page';

describe('Mod1Page', () => {
  let component: Mod1Page;
  let fixture: ComponentFixture<Mod1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mod1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
