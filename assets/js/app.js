var { Router,
    Route,
    IndexRoute,
    IndexLink,
    Link } = ReactRouter;
var Destination = document.querySelector("#container");

var Home = React.createClass({
    render: function() {
        return (

            <section id ="splashscreen">

                <h6>SUN, 2 OCT 2016 @ 19:00</h6>

                <h1>Lagos Fitness & Wellness </h1>

                <p>In life there will be road blocks but we will over come it A major key, never panic Give thanks to the most high Eliptical talk Egg whites, turkey sausage, wheat toast, water We the best To succeed you must believe They never said winning was easy Give thanks to the most high The key to more success is to have a lot of pillows Some people can’t handle success, I can A major key, never panic Special cloth alert Every chance I get, I water the plants, Lion! Eliptical talk.</p>

                <h3>WHEN</h3>

                <p>Wednesday, June 3, 2015 from 6:30 PM to 9:30 PM (BST)</p>

                <h3>WHERE</h3>

                <address>Method London - 56 Shoreditch High Street Studio 7.01 (Floor 7), London, E1 6JJ</address>

                <a href="#">View Map</a>

                <h3>FOLLOW US</h3>

            </section>

        );
    }
});

var Contact = React.createClass({
    render: function() {
        return (

            <section>
                <h2>Contact Us</h2>
                <p>The easiest thing to do is post on our <a href="http://forum.kirupa.com">forums</a>.</p>
                <div id="map-canvas">s</div>

            </section>

        );
    }
});
var Register = React.createClass({
    render: function() {
        return (
            <section>
                <h2>Register</h2>
                <form action="">
                    <fieldset>
                        <legend>Personal Details:</legend>
                        <p>Mauris sem velit, vehicula eget sodales vitae,
                            rhoncus eget sapien:</p>
                        First name:<br/>
                        <input type="text" name="firstname" /><br/>
                        Last name:<br/>
                        <input type="text" name="lastname" /><br/>
                        Email:<br/>
                        <input type="text" name="email" /><br/>
                        Telephone:<br/>
                        <input type="text" name="Telephone" /><br/>
                        Gender:<br/>

                        <select name="Gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select><br/>

                        DOB:<br/>

                        <input className="datepicker" /><br/>

                        Local Government:<br/>
                        <select name="Council">
                            <option value="option">List 1</option>
                            <option value="option">List 2</option>
                            <option value="option">List 3</option>
                            <option value="option">List 4</option>
                        </select>

                    </fieldset>

                    <fieldset>
                        <legend>Interests</legend>
                        7 aside <input type="checkbox"  name="Interests" value="7aside"  />
                        100 m <input type="checkbox"  name="Interests" value="100m" />
                        200 m <input type="checkbox" name="Interests" value="200m"  />
                        400 m <input type="checkbox" name="Interests" value="400m"  />
                        800 m <input type="checkbox"  name="Interests" value="800m"  />
                        1500 m <input type="checkbox" name="Interests" value="1500"  />
                        Table tennis <input type="checkbox" name="Interests" value="TTenis"  />
                        Womens Volly Ball <input type="checkbox" name="Interests" value="WVB" />
                    </fieldset>

                    <fieldset>
                        <legend>Add Image Profile</legend>
                        <p>Click on the image to upload a profile pic:</p>
                        <a href="#"><img src="img/user.ico" /></a>


                    </fieldset>

                    <input type="submit" value="Submit" style={{marginTop: '10px'}} className="btn btn-danger" />
                </form>
            </section>

        );
    }
});
var About = React.createClass({
    render: function() {
        return (
            <section>
                <h2>About Us</h2>
                <p>Cras facilisis urna ornare ex volutpat, et
                    convallis erat elementum. Ut aliquam, ipsum vitae
                    gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                    metus nec massa. Maecenas hendrerit laoreet augue
                    nec molestie. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus.</p>
                <h3>How we started</h3>
                <p>Cras facilisis urna ornare ex volutpat, et
                    convallis erat elementum. Ut aliquam, ipsum vitae
                    gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                    metus nec massa. Maecenas hendrerit laoreet augue
                    nec molestie. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus.</p>
                <h3>Mission statement</h3>
                <p>Cras facilisis urna ornare ex volutpat, et
                    convallis erat elementum. Ut aliquam, ipsum vitae
                    gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                    metus nec massa. Maecenas hendrerit laoreet augue
                    nec molestie. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus.</p>
            </section>
        );
    }
});

var Event = React.createClass({
    render: function() {
        return (

            <section>
                <h2>Events</h2>
                <p>Mauris sem velit, vehicula eget sodales vitae,
                    rhoncus eget sapien:</p>
                <ol>
                    <li>Nulla pulvinar diam</li>
                    <li>Facilisis bibendum</li>
                    <li>Vestibulum vulputate</li>
                    <li>Eget erat</li>
                    <li>Id porttitor</li>
                </ol>
            </section>

        );
    }
});

{/* app frame*/}
var App = React.createClass({

    render: function() {
        return (
            <div id="wrapper">
                <header>
                    <Link to="/"><h1 id="logo">Logo</h1></Link>
                    <nav id="menunav" className="navhide">
                        <ul className="menu">
                            {/*using React Router's Link components that are similar to <a> tags but offer a lot more functionality*/}
                            <li className="menu"><IndexLink to="/" activeClassName="active" className="a">Home</IndexLink></li>
                            <li className="menu"><Link to="/register" activeClassName="active" className="a">Register</Link></li>
                            <li className="menu"><Link to="/about" activeClassName="active" className="a">About</Link></li>
                            <li className="menu"><Link to="/event" activeClassName="active" className="a">Event</Link></li>
                            <li className="menu"><Link to="/contact" activeClassName="active" className="a">Contact</Link></li>
                        </ul>
                    </nav>
                    <a className="hidden" id="i-nav"><i className="fa fa-bars" id="menuicon"></i> </a>
                </header>

                {/* All content will be loaded here*/}
                <main>
                    {this.props.children}
                </main>

                <footer>Street Pas Events © 2016 All Rights Reserved. Website design by Renegare Dev</footer>
            </div>

        )
    }
});
{/* routing configuration / route matching*/}
ReactDOM.render(

    <Router>
        {/* display the app component at the (/) = root path */}
        <Route path="/" component={App}>
            {/* IndexRoute declares which component will be displayed when the app initially loads*/}
            <IndexRoute component={Home}/>
            <Route path="event" component={Event} />
            <Route path="contact" component={Contact} />
            <Route path="about" component={About} />
            <Route path="event" component={Event} />
            <Route path="register" component={Register} />
        </Route>
    </Router>,
    Destination
);
{/*
 ReactDOM.render(
 <ReactRouter.Router>

 <ReactRouter.Route path="/" component={App}>

 </ReactRouter.Route>
 </ReactRouter.Router>,
 Destination
 );
 */}




