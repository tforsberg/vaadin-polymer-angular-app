/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WealthComponent } from './wealth.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'

describe('WealthComponent', () => {
	let comp: WealthComponent;
  let fixture: ComponentFixture<WealthComponent>;
	let spy: any;

	console.log('dsf');

	beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [WealthComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
      imports: [
        RouterModule.forRoot([]),
        HttpModule
      ]
    }).compileComponents();

	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WealthComponent);
		console.log(fixture);
    comp = fixture.componentInstance;
  });

	it('should be created', () => {
    expect(comp).toBeTruthy();
  });
	
});