import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task.component';
import { NgModule } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { AddTaskService } from './add-task.service';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;
  let service: AddTaskService;
  let httpClient: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTaskComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      providers: [AddTaskService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    this.httpClient = TestBed.get(HttpClient);
    this.service = new AddTaskService(httpClient);
    component = new AddTaskComponent(service);
    fixture.detectChanges();
  });

  describe('add task to DB', () => {
    it('add new task', () => {
      component.ngOnInit();
      component.myTask.value.add = { task: 'Test' + Math.random(), parentTask: 'test1' };
      expect(component.onSubmit);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
