import React,{Component} from 'react'
import axios from 'axios';
import { Redirect,Link } from 'react-router-dom';
import AdminNavigationBar from '../../../components/AdminNavigationBar/AdminNavigationBar';
import  styles from '../../../assets/css/Admin/Register/Register.css';

class AdminRegisPage extends Component{

    constructor() {
        super();
    
        this.state = {
          registrationNumber:"",
          fullName:"",
          gender:"",
          password: "",
          destination : "",
          email : "",
          contactNumber : "",
          confirmPassword : "",
          error : false
          
        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
      
    
      onSubmit(e) {
        e.preventDefault();
    
        const user = {
            registrationNumber: this.state.registrationNumber,
            fullName: this.state.fullName,
            gender: this.state.gender,
            password: this.state.password,
            destination : this.state.designation,
            email : this.state.email,
            contactNumber : this.state.contactNumber
        };

        let confirmPassword = this.state.confirmPassword;
        let x = /\bA[0-9]{3}$/.test(user.registrationNumber);
    
        if((x === true) && (confirmPassword.localeCompare(user.password) === 0) && (user.gender !== "")){
                  //console.log(user)
          
        // register request          
        axios
        .post('http://localhost:8090/registration/admin',user,'application/json;charset=UTF-8')
        .then(res => {
            //console.log(res);
            if(res.data){
                this.setState({error:true});
                alert("Already registered!");
              }else{
                  alert("Registered!"); 
              }
        })
        .catch(err => {
          this.setState({error:true}) 
          //console.log(err);
        }) 
        
      }

      if(x === false){
        alert("Registration number is Invalid format!");
      }

      if(user.gender === "")
      alert("Please enter your gender!");

      if(confirmPassword.localeCompare(user.password) !== 0){
        this.setState({error:true})
      }


    }


render(){

  if(true){
    return(
      <div>
      <AdminNavigationBar/>

        <div  className={styles.adminmainform}>
        <div className={styles.adminformwrapper}>
        <div className={styles.primary}> 
            <h2>ADMIN REGISTRATION FORM</h2><br></br></div>
            <form id="form" onSubmit = {this.onSubmit}>
            <div className={styles.secondary}>


            <label htmlFor=" Registration Number">
            <b>Registration Number</b></label><input required
             type='text' 
             name='registrationNumber'
            placeholder='enter registration number'
            onChange={this.onChange}
            id='Registration Number' 
            className="form-control"/>
            </div>


            <div className="fullname">
            <label htmlFor="Full name"><b>Full name</b></label><input required
             type='text'
             name='fullName'
             placeholder='enter name'
             onChange={this.onChange}
             id='Name'
             className="form-control"/>
            </div>

            <div >
            <label htmlFor="E-mail">
            <b>E-mail</b></label><input required
            type='email'
            name='email'
            placeholder='example@gmail.com'
            onChange={this.onChange}
            id='email'
            className="form-control"/>
            </div>

            
            <div >
            <label htmlFor="contactnumber">
            <b>Contact number</b></label><input required
            type='text' 
            name='contactNumber'
            placeholder='enter contact number'
            onChange={this.onChange}
            id='contact number'
            className="form-control"/>
            </div>

            <div >
            <label htmlFor="designation">
            <b>designation</b></label><input required
            type='text' 
            name='designation'
            placeholder='enter designation'
            onChange={this.onChange}
            id='designation'
            className="form-control"/>
            </div>

           <div >
           <label htmlFor="Gender">              
           <b>Gender</b></label><br></br><input 
           type="radio"
           name="gender"
           value="male"
           onChange={this.onChange}
           /*className="form-control"*//> Male<br></br>


            <input
            type="radio"
            name="gender"
            value="female" 
            onChange={this.onChange}
            /*className="form-control"*//> Female</div>

<br></br>

            <div className="Password">
            <label htmlFor="Password">
            <b>Password</b><br></br></label><input required
            type='password'
            name='password'
            placeholder='enter password' 
            onChange={this.onChange} 
            id='Password'
            className="form-control"/>
            </div>

            <div className="Password">
            <label htmlFor="Password">
            <b>Confirm Password</b><br></br></label><input required
            type='password'
            name='confirmPassword'
            placeholder='enter password' 
            onChange={this.onChange} 
            id='confirmPassword'
            className="form-control"/>
            </div><br></br><br></br><br></br><br></br><br></br>
            <div>
                {this.state.error && (<p><font color="red">Those passwords didn't mathed!</font></p>)}
            </div>
            <div className={styles.reset1}>
            <div className='submit'>
            <label htmlFor='submit'>
            </label><input 
            type='submit'
            value='Add Admin'
            className='btn btn-primary'  />
            </div>
            </div>
            <div className={styles.reset}>
            <label htmlFor='reset'></label>
            <input className='btn btn-primary' type='reset' value='Reset'
           />
            </div>
            </form>
            <div></div>
              <Link to="/dashboard">
                Back
              </Link>
            </div>
        </div>
        </div>
    )}else{
      return(
        <Redirect to="/" />  
    )
    }
}
}

export default AdminRegisPage;