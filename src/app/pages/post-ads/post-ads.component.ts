import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-ads',
  templateUrl: './post-ads.component.html',
  styleUrls: ['./post-ads.component.scss']
})

export class PostAdsComponent implements OnInit {
 myFiles:string [] = []; // Multiple upload
 form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(2)]],
      price: [null, [Validators.required]],
      desc: [null, [Validators.required]],
      file: [null, [Validators.required]],
      fileSource: [null, [Validators.required]]
    });
  }

  onFileChange(event:any) {
  
    // Single file upload
    /*if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        fileSource: file
      });
    }*/

    // Multiple file upload
    for (var i = 0; i < event.target.files.length; i++) { 
      this.myFiles.push(event.target.files[i]);
      this.form.patchValue({
        fileSource: event.target.files[i]
      });
    }
  }

  saveDetails(form:any) {

    // Multiple file upload
    const formData = new FormData();
    for (var i = 0; i < this.myFiles.length; i++) { 
      formData.append("file[]", this.myFiles[i]);
    }

    // Single file upload
    /*const formData = new FormData();
    formData.append('file', this.form.get('fileSource').value);*/

    console.log(form);

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
  }

}
