# comentário
FROM debian:latest

# comentário
MAINTAINER Pedro

# comentário
RUN apt-get update
RUN apt-get upgrade

# comentário
EXPOSE 80
EXPOSE 443
