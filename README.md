<p align="center"><img src="Logo_png/Dolos_Logo_Transparent_BlackLines.png" width="150px" height="150px"></p>

![hacktoberfest-acmvit](https://user-images.githubusercontent.com/59484953/94790665-3a4d9a80-03f4-11eb-98da-3614b3eb6ebc.png)

<h1 align="center"> Dolos </h1>

<p align="center"> 
A handy data mocking api to generate data in  given schema
</p>
<div align="center">

[![made-by-acm](https://img.shields.io/badge/MADE%20BY-ACM%20VIT-blue?style=for-the-badge)](https://acmvit.in/)
![GitHub last commit](https://img.shields.io/github/last-commit/ACM-VIT/dolos?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/ACM-VIT/dolos?style=for-the-badge)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://en.wikipedia.org/wiki/MIT_License)
[![GitHub forks](https://img.shields.io/github/forks/ACM-VIT/dolos?style=for-the-badge)](https://github.com/ACM-VIT/dolos/network)
[![GitHub stars](https://img.shields.io/github/stars/ACM-VIT/dolos?style=for-the-badge)](https://github.com/ACM-VIT/dolos/stargazers)
![Github Actions](https://img.shields.io/github/workflow/status/ACM-VIT/dolos/Node.js%20CI?style=for-the-badge)
![GitHub Hacktoberfest combined status](https://img.shields.io/github/hacktoberfest/2020/ACM-VIT/dolos?style=for-the-badge)

</div>

---

Ever wanted to get random data for that app you were building, say no more. Dolos, the god of deception and trickery is here for you.

---

## Contribute

To take part in the development of this project, refer the github projects board. We have setup beginner level issues, and labelled them as well ! Feel free to claim any issue (or open a new one) and contribute to the development of the project.

---

## Usage

To setup project locally, fork the repository.

```console
# install dependencies
npm install

# run the server
npm run server
```

---

# Docker

### 🐳 Run and develop through Docker (Optional)

The docker-compose.yml file contain:

- **phpMyAdmin**: \*For database manager.\*\*
- **MySQL**: _The database itself_
- **Dolos**: _The Dolos application_
- **Portainer**: _To monitoring your container services, such as logs, restart and more._

For development, you can run the Dolos using Docker Compose by following this steps below:

- Adjust `.env` with some dependencies variables.
- Run `docker-composer up -d` for build all containers and prepare them to the first run.
- Run `docker-composer up ` and that's it, let's code!
- If you want to stop, run `docker-compose down`

The IP address to use:

```sh
- phpMyAdmin: 0.0.0.0:8081
- Dolos: 0.0.0.0:3000
- Portainer: 0.0.0.0:9000
```

- To connect on **Portainer**, do the follow steps:
  1. You'll need to create a password for local admin account.
  2. Choose the option: "**Docker** _manage the local Docker environment_".
  3. Done, you're now able to manage the containers.

## Contribution

Readup the [detailed plan](docs/PLAN.md) of the project and how to contribute [here](docs/SUBMITTING_PULL_REQUEST.md).

## Hackers !

[![Collaborators](https://contributors-img.web.app/image?repo=ACM-VIT/dolos)](https://github.com/ACM-VIT/dolos/graphs/contributors)
