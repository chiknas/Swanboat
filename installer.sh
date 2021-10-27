#!/bin/bash
# Update RPI
apt-get update && apt-get upgrade -y

# Enable rpi camera
sudo raspi-config nonint do_camera 0

#Install git
apt-get install -y git

# Install NodeJS 14 and npm
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
apt-get install -y nodejs

# Global install of yarn
npm install --global yarn 

# Install project
git clone https://github.com/chiknas/Swanboat.git
cd Swanboat
yarn

# TODO: conf project as a service to start when rpi starts
# TODO: conf rpi as a wifi hotspot to connect the client