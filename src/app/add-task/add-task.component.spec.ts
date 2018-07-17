import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task.component';
import { NgModule } from '@angular/core';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTaskComponent, FormGroup, FormControl],
      imports: [FormGroup, FormControl]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('add task ', () => {
    it('on init button text', () => {
      component.ngOnInit();
      component.myTask.value.add = { task: 'Test', parentTask: 'test1' };
      expect(component.onSubmit);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
