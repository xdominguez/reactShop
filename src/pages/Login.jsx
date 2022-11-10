import React,{useRef} from 'react';
import '../styles/Login.scss';

const Login = () => {
	const form = useRef (null);
//el objeto event se usa para evitar el redireccionamiento de la pagina por el submit
	const handleSubmit = (event) =>{
		//evita el enrutamiento por submit
		event.preventDefault();
		//formData permite la transmisión de información al backend de forma segura
		const formData = new FormData(form.current);
		const data  = {
		//Se cambia id por name para usar formData
		username: formData.get('email'),
		password: formData.get('password')
		}
		console.log(data);
	}


	return (
		<div className="Login">
			<div className="Login-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<form action="/" className="form" ref = {form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button className="primary-button login-button" onClick={handleSubmit}>
					"Log in"
						</button>
					<a href="/">Forgot my password</a>
				</form>
				<button 
				className="secondary-button signup-button" >
									Sign up
				</button>
			</div>
		</div>
	);
}

export default Login;