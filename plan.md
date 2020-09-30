# Plan

This document includes the detailed plan about the project.

## Where to find work ?
This project will use github boards to manage what's happening, which can be [seen here](https://github.com/ACM-VIT/dolos/projects/1). 


## What is this project about ?
Many times while developing frontend applications or mobile applications, we need to mock data, loading data from a local package does not simulate the actual delay which happen in network calls. This service (or server or backend or script, all mean same in this document) provides the feature to generate random data as per the requirements of user.

## How do we know what is the user's requirement ?
We don't. So how do we generate the data ? the answer to that is simple. The user tells us. If you are wondering how, here's how.

User sends a json body in the request, with the property names and the datatype of data they require. Note that datatype here are not limited to number or strings, but also to advanced filters like `string.first_name` or `string.gender`.

This json is parsed by the backend and a suitable response is generated and returned.

## What all datatypes do we support ?
0, and unlimited. Largely depends how many our contributors are able to implement. We recommend starting off with basic data-types like just `string` or `number` and once that is done, aim towards advanced things like `string.first_name`

## Where do we get the data from ?
There are numerous packages on [npm ](https://www.npmjs.com/) available for it, feel free to use the one that fits your needs.

## I can't see any issue for X, can I do that ?
yes ! we encourage you to open issues if you think there should be a new feature (called feature-request) or you find a bug. you can [open a new issue here](https://github.com/ACM-VIT/dolos/issues/new)

