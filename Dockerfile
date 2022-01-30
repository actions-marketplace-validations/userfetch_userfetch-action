FROM aryan02420/userfetch:v1

WORKDIR /github/workspace

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]