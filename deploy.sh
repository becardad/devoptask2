#!/bin/bash
    echo hi123
    sh 'chmod +x build.sh'
    sh './build.sh'
    docker login -u sabari22 -p sabari2004
    docker tag test sabari22/aa
    docker push sabari22/aa
    
