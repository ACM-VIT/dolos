# Contributing Guidelines

## Claiming Issues

Seeing the overwhelming response from our community, we are **not individually assigning issues**, so please do not ask if you can work on it or not. Directly send a pull request following the guidelines mentioned in next heading.

Also note that some issues require a very minor fix, these **will not accept** a dedicated PR for them as these might qualify as **_spam_** by Hacktoberfest. If you are interested in fixing those, club it with any other issue and send a single PR for both.

## Pull Requests

As this repository is to promote open source under the awesome [Hacktoberfest](http://hacktoberfest.digitalocean.com/) initiative, there are a few rules that we need to follow to ensure good contributing practices and avoid spam.

- All pull requests must have an issue linked to it, else they would be **closed** by the maintainers.
- A Pull request can either contribute to an issue, or fix it.
  - use `Fixes #10` to **completely fix** the said issue.
  - use `References #10` to **contribute to**(_partial fix_) the said issue.
- While reviewing, we sort the pull requests in **ascending order** of timestamps, which means `PR #10` would be reviewed before `PR #11` and so on.
- Feel free to send a pull request until another pull request for the same issue is marked as `code-ready` or `ready-to-merge`.

## What do these labels mean ?

- `ready-to-merge` : your PR is fit to be merged into the repository, will be merged shortly.
- `code-ready` : your PR has passed the review phase as code is functional / docs are proper, but your PR needs to sync with master branch, or fix merge conflicts etc.
- `wontfix` : the PR that you have sent is does a very minor change that can qualify as **_spam_** by hacktoberfest, therefore these changes should be done along-with some other issue.
