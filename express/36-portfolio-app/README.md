# Portfolio Site

Let's build a portfolio site to showcase your newly acquired skills. Highlight projects that you have been busy working on. Lets implement the project using MEAN stack. 

You will learn this with neatly defined step by step process. Here is what it will take us to build the complete portfolio site.

 1. Create a basic `ExpressJS` project and name it `my-portfolio` using `hbs` view engine
 2. Add the hbs views (pages) index, about, contact, blog, blog-detail, projects and project-details
 3. Define app routes using `Express Router` and link all the views
 4. Design 2 unique layouts for public facing views (pages) and admin views (pages)
 5. Add `Bootstrap 4` to enhance the look and feel of these views
 6. Finish designing these layouts & views using the `Bootstrap 4` 
 ```
6.1 Default application layout - Sticky navbar and footer
	- home page
	- contact page
	- about page
	- project list
	- project detail
6.2 Blog layout
	- list page
	- detail page
6.3 Admin layout
	- dashboard
	- project list
	- project create/edit
	- blog list
	- blog create/edit
	- contact inquiries
	- settings page
6.4 Login page layout
```

7. Implement sample login mechanism use `express session`
8. Server side validation for login using `express-validator`
9. Protect admin routes - make sure they are accessible only after login
10. Add some static data to render all the views
```
var myPortfolio = {
	profile: {
		name: '',
		description: '',
		avatar: '',
		contact: {
			email: '',
			phone: '',
			location: ''
		}
	},
	about: {},
	blogs: [{
		title: '',
		description: '',
		content: '',
	}],
	projects: [{
		title: '',
		description: '',
		content: '',
		githubUrl: '',
	}],
}
```