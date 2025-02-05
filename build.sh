#!/bin/bash
docker build -t test .
docker run -itd -p 108:80 test
