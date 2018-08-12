import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditTaskComponent } from './edit-task.component';
import { HttpClient, HttpResponse, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('EditTaskComponent', () => {
  let component: EditTaskComponent;
  let fixture: ComponentFixture<EditTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditTaskComponent],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule,HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('update task ', () => {
    it('update task in db', () => {
      component.ngOnInit();
      component.task = 'Sprint1';
      component.priority = 20;
      expect(component.update());
    });
  });
});
