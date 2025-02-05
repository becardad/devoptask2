#!/bin/bash
docker build -t test .
docker run -itd -p 100:80 test
