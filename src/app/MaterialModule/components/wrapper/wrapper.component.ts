import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})


export class WrapperComponent implements OnInit {

  attrVal:any = '';


     navLinks:any[] =[
    { id:0, nameNav:"User Management", iconNav:"manage_accounts", linkNav:"dashboard",starNav:"star_border",starNav1:"star",status:false},
    { id:1, nameNav:"Groups", iconNav:"groups", linkNav:"info",starNav:"star_border",starNav1:"star",status:false},
    { id:2, nameNav:"Edit", iconNav:"edit", linkNav:"",starNav:"star_border",starNav1:"star",status:false},
    { id:3, nameNav:"Storage", iconNav:"storage", linkNav:"",starNav:"star_border",starNav1:"star",status:false},
    { id:4, nameNav:"Home", iconNav:"home", linkNav:"",starNav:"star_border",starNav1:"star",status:false},
    { id:5, nameNav:"Shield", iconNav:"shield", linkNav:"",starNav:"star_border",starNav1:"star",status:false},
    { id:6, nameNav:"Local Shipping", iconNav:"local_shipping", linkNav:"",starNav:"star_border",starNav1:"star",status:false},
    { id:7, nameNav:"Account Balance", iconNav:"account_balance", linkNav:"",starNav:"star_border",starNav1:"star",status:false}
  ];

  navLinks2:any[] =[
    { id:0, nameNav:"User Management", iconNav:"manage_accounts", linkNav:"dashboard",starNav:"star", status:false},
    { id:1, nameNav:"Groups", iconNav:"groups", linkNav:"info",starNav:"star", status:false},
    { id:2, nameNav:"Edit", iconNav:"edit", linkNav:"",starNav:"star", status:false},
  ];

  userMenu:{name:string,icon:string,color:string}[]=[
    {name:"user name",icon:"account_circle",color:"green"},
    {name:"user name",icon:"account_circle",color:"green"},
    {name:"user name",icon:"account_circle",color:"green"},
    {name:"user name",icon:"account_circle",color:"green"},
    {name:"user name",icon:"account_circle",color:"green"},
    {name:"user name",icon:"account_circle",color:"green"},
    {name:"user name",icon:"account_circle",color:"green"},
    {name:"user name",icon:"account_circle",color:"green"},
    {name:"user name",icon:"account_circle",color:"green"},
    {name:"user name",icon:"account_circle",color:"green"},
    {name:"user name",icon:"account_circle",color:"green"},
    {name:"user name",icon:"account_circle",color:"green"},
  ];

  msgs:any[]=[
    {width: "200px", height: "30px", backgroundColor: "#f1f1f1", marginBottom: ".8em",borderRadius:"1.5em",marginLeft:"2.5em", marginTop:".5em",
    icon:"account_circle" ,left:"1em", position:"absolute", color:"white"},
    {width: "180px", height: "20px", backgroundColor: "#f1f1f1", marginBottom: ".8em",borderRadius:"1.5em", marginTop:"0em",marginLeft:"3.5em",icon:"account_circle"
    ,left:"1em", position:"absolute", color:"black"},
    {width: "130px", height: "50px", backgroundColor: "#f8edf4", marginBottom: ".8em",borderRadius:"1.5em", marginTop:"0em",marginLeft:"8em",icon:"account_circle" 
    ,left:"1em", position:"absolute", color:"white"},
    {width: "180px", height: "20px", backgroundColor: "#f8edf4", marginBottom: ".8em",borderRadius:"1.5em", marginTop:"0em",marginLeft:"4em",icon:"account_circle"
    ,left:"1em", position:"absolute", color:"white"},
    {width: "200px", height: "70px", backgroundColor: "#f1f1f1", marginBottom: ".8em",borderRadius:"1.5em", marginTop:"0em",marginLeft:"3.5em",icon:"account_circle"
    ,left:"1em", position:"absolute", color:"black", top:"1em"}
  ];

cards:any[]=[
{icon:"phonelink_setup", header:"Guiede Setup",color:"#fdcc3b", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste officiis explicabo! Quis, perspiciatis."},
{icon:"", header:"Guiede Setup", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste officiis explicabo! Quis, perspiciatis."},
{icon:"", header:"Guiede Setup", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste officiis explicabo! Quis, perspiciatis."},
{icon:"", header:"Guiede Setup", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste officiis explicabo! Quis, perspiciatis."},
{icon:"", header:"Guiede Setup", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste officiis explicabo! Quis, perspiciatis."},
{icon:"", header:"Guiede Setup", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste officiis explicabo! Quis, perspiciatis."},
{icon:"", header:"Guiede Setup", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste officiis explicabo! Quis, perspiciatis."},
{icon:"", header:"Guiede Setup", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste officiis explicabo! Quis, perspiciatis."},
{icon:"", header:"Guiede Setup", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste officiis explicabo! Quis, perspiciatis."},
];

  isExpanded: boolean = false;

  helpIsShown: boolean = false;

  mainIsShown: boolean = true;

  main2IsShown: boolean = false;

  main3IsShown: boolean = false;

  msgIsShown: boolean = false;

  msgsIsShown: boolean = false;

  classToggledMain:boolean = true;

  classToggledMain2:boolean = false;

  classToggledMain3:boolean = false;

  panelState:boolean = false;

  // starBorderShown = true;

  // starBorderShown1 = true;

  // starShown = false;

  // starShown1 = false;

  // star(){
  //   this.starBorderShown = false;
  //   this.starShown = true;
  // }

  // starBorder(){
  //   this.starBorderShown = true;
  //   this.starShown = false;
  // }

  // star1(){
  //   this.starBorderShown1 = false;
  //   this.starShown1 = true;
  // }

  // starBorder1(){
  //   this.starBorderShown1 = true;
  //   this.starShown1 = false;
  // }

  togglemainList(e:number){

   let index = this.navLinks.findIndex((obj =>obj.id === e));
    this.navLinks.filter(link=>{
      if(link.status === true){
        link.status = false;
      }
    })
    this.navLinks[index].status = !this.navLinks[index].status;
   }

   togglemain2List(e:number){

    let index = this.navLinks2.findIndex((obj =>obj.id === e));
     this.navLinks2.filter(link=>{
       if(link.status === true){
         link.status = false;
       }
     })
     this.navLinks2[index].status = !this.navLinks2[index].status;
    }

   togglemain() {
    this.classToggledMain = !this.classToggledMain;  
    this.mainIsShown = !this.mainIsShown;

    this.classToggledMain2 = false; 
    this.main2IsShown = false;

    this.classToggledMain3 = false;
    this.main3IsShown = false;  

  }

  togglemain2() {
    this.classToggledMain2 = !this.classToggledMain2; 
    this.main2IsShown = !this.main2IsShown; 

    this.classToggledMain = false; 
    this.mainIsShown = false;

    this.classToggledMain3 = false;
    this.main3IsShown = false; 
  }

  togglemain3() {
    this.classToggledMain3 = !this.classToggledMain3;
    this.main3IsShown = !this.main3IsShown;  

    this.classToggledMain2 = false; 
    this.main2IsShown = false;

    this.classToggledMain = false;
    this.mainIsShown = false; 
  }

  toggle(){

  }

toggleShowHelp() {
if( this.msgIsShown != true){
   this.helpIsShown = !this.helpIsShown;

   if(this.helpIsShown == true){
   document.getElementById("helpShowned")!.className+="Shown";
   }

   if(this.helpIsShown == false){
    document.getElementById("helpShowned")!.classList.remove("Shown");
    }
  }

}

toggleShowMsg() {
  if( this.helpIsShown != true){
   this.msgIsShown = !this.msgIsShown;
   if(this.msgIsShown == true){
   document.getElementById("msgShowned")!.className+="Shown";
   }

   if(this.msgIsShown == false){
    document.getElementById("msgShowned")!.classList.remove("Shown");
    }
  }
}

toggleShowMsgs() {
   this.msgsIsShown = !this.msgsIsShown;
}

toggleCloseMsgs() {
  this.msgsIsShown = !this.msgsIsShown;
}

  constructor(public router: Router) { 

  }

  ngOnInit(): void {
  }


}
