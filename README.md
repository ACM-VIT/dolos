<h1 align="center"><a href="https://organize.mlh.io/participants/events/4390-kickstarting-hacktoberfest-with-acm-vit">Kicking Off Hacktoberfest with ACM-VIT!</a></h1>

![hacktoberfest-acmvit](https://user-images.githubusercontent.com/59484953/94790665-3a4d9a80-03f4-11eb-98da-3614b3eb6ebc.png)

<h1 align="center"> Dolos </h1>

<p align="center"> 
A handy data mocking api to generate data in  given schema
</p>

<p>
  <a href="https://acmvit.in/" target="_blank">
    <img alt="made-by-acm" src="https://img.shields.io/badge/MADE%20BY-ACM%20VIT-blue?style=for-the-badge" />
  </a>
    <img alt="license" src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" />
    <img alt="Github Actions" src="https://github.com/ACM-VIT/dolos/workflows/Node.js%20CI/badge.svg" />
</p>
<img alt="GitHub Hacktoberfest combined status" src="https://img.shields.io/github/hacktoberfest/2020/ACM-VIT/dolos?style=for-the-badge">

[![GitHub forks](https://img.shields.io/github/forks/ACM-VIT/dolos?style=for-the-badge)](https://github.com/ACM-VIT/dolos/network)

[![GitHub stars](https://img.shields.io/github/stars/ACM-VIT/dolos?style=for-the-badge)](https://github.com/ACM-VIT/dolos/stargazers)

---

Ever wanted to get random data for that app you were building, say no more. Dolos, the god of deception and trickery is here for you. 


---
## Contribute
To take part in the development of this project, refer the github projects board. We have setup beginner level issues, and labelled them as well ! Feel free to claim any issue (or open a new one) and contribute to the development of the project.


---
## Submitting a Pull Request

 * Fork the repository by clicking the fork button on top right corner of the page
 * Clone the target repository. To clone, click on the clone button and copy the https address. Then run 
 <pre><code>git clone [HTTPS-ADDRESS]</code></pre>
* Go to the cloned directory by running 
<pre><code>cd [NAME-OF-REPO]</code></pre>
* Create a new branch. Use 
<pre><code> git checkout -b [YOUR-BRANCH-NAME]</code></pre>
* Make your changes to the code. Add changes to your branch by using 
<pre><code>git add .</code></pre>
* Commit the chanes by executing
<pre><code>git commit -m "your msg"</code></pre>
* Push to remote. To do this, run 
<pre><code>git push origin [YOUR-BRANCH-NAME]</code></pre>
* Create a pull request. Go to the target repository and click on the "Compare & pull request" button. **Make sure your PR description mentions which issues you're solving.**
<img src="https://drive.google.com/u/1/uc?id=1f9JKAR-kRvCRGxIs_SAvegaYDPx53T9G&export=download"></img>
* Wait for your request to be accepted. 

---
# Docker
### 🐳 Run and develop through Docker (Optional)

The docker-compose.yml file contain:
- **phpMyAdmin**: *For database manager.**
- **MySQL**: *The database itself*
- **Dolos**: *The Dolos application*
- **Portainer**: *To monitoring your container services, such as logs, restart and more.*

For development, you can run the Dolos using Docker Compose by following this steps below:
- Adjust `.env` with some dependencies variables.
- Run `docker-composer up -d`  for build all containers and prepare them to the first run.
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
    2. Choose the option: "**Docker** *manage the local Docker environment*".
    3. Done, you're now able to manage the containers.
  
## Guidelines for Pull Request

<!-- general guidelines here -->
  * Avoid pull requests that :
      * are automated or scripted
      * that are plagarized from someone else's branch
  * Do not spam
  * Project maintainer's decision on validity of PR is final.

  For additional guidelines, refer to [participation rules](https://hacktoberfest.digitalocean.com/details#rules)

---

-_domain specific guidelines here_-
  
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

## Hackers !

<a href="https://github.com/ACM-VIT/dolos/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=ACM-VIT/dolos" />
</a>
