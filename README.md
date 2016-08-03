# Code-Challenge

In order for Volta to objectively measure a fullstack candidate's fundamental JavaScript skills, candidates will create a simple web application using the MVC framework of their choice to achieve 2's and 3's (out of 3) in 6 domains set forth by the challenge evaluation rubric. Candidates should expect to spend about two hours on the challenge, use Git for version control, and provide local development documentation.

### SMART Goal (A.K.A. why you’re being asked to complete a coding challenge)

**Specific**: Candidates are busy and have a lot of interviews to juggle. Volta is equally busy and devotes a lot of resources to evaluating and selecting the best engineers for their team. Before both parties spend four-to-five hours of their day for an onsite, Volta wants to make sure that candidates meet their basic skill requirements. By completing the challenge, candidates benefit from adding to their public code portfolio, even if they are not selected for an interview with Volta.

**Measurable**: When complete, the project should contain a simple client and server which displays station data based on the example given. We’ve included a (mostly) objective evaluation rubric for the challenge; we expect candidates to receive mostly 2's and 3's. Commit history will provide a running log of development steps and design choices.

**Achievable**: Based on the phone screen and candidate’s supporting documentation (resume, etc.), we think you’ve got a great shot at completing the project. We’ve complete the challenge ourselves to make sure the scope and estimated time required is appropriate.

**Relevant**: Volta currently works in a Node.js ecosystem. Developers contribute across the fullstack with lots of autonomy. They need basic application architecture skills to start projects from scratch and knowledge of MVC development principals to iterate on the existing codebase.

**Time-Bound**: In two hours, candidates should be able to complete the coding challenge with mostly 2’s and 3’s on the provided rubric. We commit (see what I did there?) to reviewing your challenge within two business days.

### Hiring Process

1. Non-technical phone screen about your experiences, projects, and interest in Volta.
1. Coding challenge (this repo)
1. Onsite (or online)
 - Whiteboarding toy problem
 - Pair programming
1. Culture-fit interviews with CTO, CEO

# Problem

Create a simple web application which displays Volta station data and provides a search interface. We’ve given you a fake database of data in the form of `database.js`. Your client must use an MVC, with a preference for React or AngularJS; we’ve included a screenshot of the minimal UI/design we’d like to see, but it doesn’t need to be pixel perfect. The server should be JavaScript-based (f.e. Node.js, Express, etc.). Create a file named `RUNME.md` to explain how we should run and evaluate your solution locally.

To give some more specifics to the requirements, we’ve included our evaluation rubric in this repository as `Code Challenge Rubric`. There’s no distinct passing score, but go for perfect, ok?

### Basic Requirements

- [ ] Server reads from database.js
- [ ] API endpoint serves station data to client
- [ ] Client displays data according to (or improving on) example
- [ ] Stations are searchable by location name (locationName key)
- [ ] Documentation (RUNME.md) provides steps for evaluator to easily run the project locally

### Getting Started

1. Read and understand the whole README.
1. Fork this repository to your own account. Clone the repo locally.
1. Cut a branch for your solution.
1. Regularly commit changes to your local branch.
1. When finished, push your branch to your remote.
1. Email us the link to your solution for review.

### Questions?

Submit an issue in this repository, tagging either @adam-back or @ateich. Kudos if you make a pull request to `README` documentation to improve clarity.
