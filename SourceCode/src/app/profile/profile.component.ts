declare var $: any;
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Reg1Service } from '../reg1.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	age:Number;
	fullname: String;
	father_name: String;
	religion: String;
	language: String;
	height: String;
	status: String;
	place: String;
	address: String;
	city: String;
	weight: String;
	state:String;
	birthdate: Date;
	field: String;
	education: String;
	workplace: String;
	income: String;
	workas: String;
	future: String;
	hobbies: String;
	bio: String;
	exp: String;
	constructor(private _auth: UserService, private register: Reg1Service) {

	}

	ngOnInit() {
		$(document).ready(function () {
			var div = $('#pi');
			var width = div.width();
			var height = 1.284 * width;
			div.css('height', height);
		});
		$(window).resize(function () {
			var div = $('#pi');
			var width = div.width();
			var height = 1.284 * width;
			div.css('height', height);
		});
		this.register.getUserData(sessionStorage.getItem('session_id')).subscribe
			(
				res => {
					this.age = res.age;
					this.birthdate = res.birth_date;
					this.fullname = res.name;
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

}
