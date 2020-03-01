import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  // constructor(
  //   private fb: FormBuilder,
  //   private router: Router,
  //   private ngZone: NgZone,
  //   private apiService: ApiService,
  // ) { }

  // submitted = false;  
  // taskForm = new FormGroup({
  //   taskName: new FormControl(''),
  //   taskFrequency: new FormControl(''),
  //   taskFeels: new FormControl('');
  // });


  // ngOnInit(): void {
  // }

  // onSubmit() {
  //   this.submitted = true;

  // }

  submitted = false;
  taskForm: FormGroup;
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.employeeForm = this.fb.group({
      taskName: ['', [Validators.required]],
      taskFrequency: ['', [Validators.required]],
      taskFeels: ['', [Validators.required]],
    })
  }

  // Choose designation with select dropdown
  // updateProfile(e){
  //   this.employeeForm.get('designation').setValue(e, {
  //     onlySelf: true
  //   })
  // }

  // Getter to access form control
  get myForm(){
    return this.taskForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.taskForm.valid) {
      return false;
    } else {
      this.apiService.createTask(this.taskForm.value).subscribe(
        (res) => {
          console.log('Employee successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/employees-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }


}
