FROM node:18 AS develop
ENV NODE_OPTIONS="--max_old_space_size=4096"
RUN mkdir -p /home/app
WORKDIR /home/app

# install angular
RUN npm install -g @angular/cli@16

# copy dependency files
COPY package.json /home/app/package.json
COPY package-lock.json /home/app/package-lock.json

# install dependencies
RUN npm install

# RUN server
EXPOSE 4200
CMD ["ng", "serve","--configuration=development", "--host", "0.0.0.0", "--poll=2000", "--port", "4200", "--disable-host-check"]