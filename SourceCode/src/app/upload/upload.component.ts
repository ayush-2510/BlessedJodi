import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Reg1Service } from '../reg1.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-upload',
	templateUrl: './upload.component.html',
	styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
	age: Number;
	name: String;
	father_name: String;
	religion: String;
	language: String;
	height: String;
	status: String;
	place: String;
	address: String;
	city: String;
	weight: String;
	state: String;
	birth_date: Date;
	field: String;
	education: String;
	workplace: String;
	income: String;
	workas: String;
	future: String;
	hobbies: String;
	bio: String;
	exp: String;
	constructor(private _auth: UserService, private register: Reg1Service, private _router: Router) {

	}
	ngOnInit() {
		this.register.getUserData(sessionStorage.getItem('session_id')).subscribe
			(
				res => {
					this.age = res.age;
					this.birth_date = res.birth_date;
					this.name = res.name;
					this.father_name = res.father_name;
					this.religion = res.religion;
					this.language = res.language;
					this.height = res.height;
					this.weight = res.weight;
					this.place = res.place;
					this.status = res.status;
					this.city = res.city;
					this.state = res.state;
					this.address = res.address;
					console.log(res)
				},
				err => {
					alert(JSON.stringify(err));
					console.log(err)
				}
			);

		this.register.getUserData1(sessionStorage.getItem('session_id')).subscribe
			(
				res => {
					this.education = res.education;
					this.field = res.field;
					this.workplace = res.workplace;
					this.workas = res.workas;
					this.income = res.income;
					this.hobbies = res.hobbies;
					this.future = res.future;
					this.bio = res.bio;
					this.exp = res.exp;
					console.log(res)
				},
				err => {
					alert(JSON.stringify(err));
					console.log(err)
				}
			);

	}

	UpdateValue(data) {
		var udata = data
		console.log("Updating Value...");
		this.register.updatedata(sessionStorage.getItem('session_id'), udata).subscribe(
			res => {
				console.log('Updating value.....');
			},
			err => {
				console.log('Error in Updating value')
				console.log(err)
			});

		this.register.updatedata1(sessionStorage.getItem('session_id'), udata).subscribe(
			res => {
				console.log('Updating value.....');
				this._router.navigate(['/profile'])
			},
			err => {
				console.log('Error in Updating value')
				console.log(err)
			});

	}

}
