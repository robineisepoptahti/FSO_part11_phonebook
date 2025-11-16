#!/bin/bash

echo "Build script"
npm install
cd ./2.17.puhelinluettelo
npm install
npm run build
cp -r dist ..
cd ..
echo "Build complete"