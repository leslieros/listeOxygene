// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseService {
    firebaseConfig = {
        apiKey: "AIzaSyD7z1L7Uy6A_5BDUVOenkVSTuf55kwVDiw",
        authDomain: "liste-oxygene.firebaseapp.com",
        databaseURL: "https://liste-oxygene.firebaseio.com",
        projectId: "liste-oxygene",
        storageBucket: "liste-oxygene.appspot.com",
        messagingSenderId: "946729017792",
        appId: "1:946729017792:web:93798b1ea57e74e977e825",
        measurementId: "G-4QJLRJRBWJ"
    };

    constructor() {
        // Initialize Firebase
        firebase.initializeApp(this.firebaseConfig);
        firebase.analytics();
    }

    addPost(id, article: string, auteur: string, date: string, lien: string, titre: string): void {
        firebase.database().ref('articles/' + id).set({
            article: article,
            auteur: auteur,
            date: date,
            lien: lien,
            titre: titre
        }, function (error) {
            if (error) {
                // The write failed...
            } else {
                // Data saved successfully!
            }
        });
    }
}