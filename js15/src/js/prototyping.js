/**
 * Created by Zerk on 03-Feb-17.
 */

define(function () {

    'use strict';

    function Human() {
        this.name = 'Alex';
        this.age = 31;
        this.height = 180;
        this.weight = 90;
    }

    function Worker() {
        this.job = 'WebDev';
        this.sallary = 10000;
        this.work = function () {
            return 'Working!';
        }
    }

    Worker.prototype = new Human();

    function Student() {
        this.placeOfStudy = 'KHNURE';
        this.scholarship = 1000;
        this.watchTvShow = function () {
            return 'Watching a tv show!';
        }
    }

    Student.prototype = new Human();

    let worker = new Worker(),
        student = new Student();

    console.log('Worker is ' + worker.age + ' years old' + '\nHis job is ' + worker.job + '\nHe is about to start ' + worker.work());

    console.log('Student"s name is ' + student.name + '\nHe is studying at ' + student.placeOfStudy + '\nHe is ' + student.height + ' cm tall' + '\nAtm student is ' + student.watchTvShow());
});

