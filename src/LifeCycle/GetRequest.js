import React, {Component} from 'react'
import axios from 'axios'
import './../App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

class GetRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: ''
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                this.setState({posts: response.data});
            })
            .catch(error => {
                this.setState({error: 'URL Error'})
            })
    }

    render() {
        const {posts, error} = this.state;
        return (
            <div>
                {/*<h1>List Posts Data</h1>
                {
                    posts.length ?
                        posts.map((post) => <table key={post.id}>
                            <tbody>
                            <tr>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                            </tr>
                            </tbody>
                        </table>) : <b>{error}</b>
                }*/}
                <div className='ContactForm'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 text-center my-5'>
                                <div className='contactForm'>
                                    <form id='contact-form' noValidate>
                                        {/* Row 1 of form */}
                                        <div className='row formRow mb-2'>
                                            <div className='col-6'>
                                                <input type='text' name='name' className='form-control formInput' placeholder='Name' />
                                            </div>
                                            <div className='col-6'>
                                                <input type='email' name='email' className='form-control formInput' placeholder='Email address' />
                                            </div>
                                        </div>
                                        {/* Row 2 of form */}
                                        <div className='row formRow mb-2'>
                                            <div className='col'>
                                                <input type='text' name='subject' className='form-control formInput' placeholder='Subject' />
                                            </div>
                                        </div>
                                        {/* Row 3 of form */}
                                        <div className='row formRow mb-2'>
                                            <div className='col'>
                                                <textarea rows={3} name='message' className='form-control formInput' placeholder='Message'></textarea>
                                            </div>
                                        </div>

                                        <button className='submit-btn btn btn-primary' type='submit'>
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GetRequest