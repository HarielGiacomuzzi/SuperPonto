case "$1" in
	start)
		echo "starting docker and node service"
		docker-compose up -d && npm start
	;;
	stop)
		echo "stopping"
		docker-compose stop
	;;
	remove)
		echo "removing containers"
		docker-compose stop && docker-compose rm -f
	;;
	restart)
		echo "restarting"
		docker-compose stop && docker-compose rm -f
		docker-compose up -d && npm start
	;;
	*)
		echo "Usage: ./helper [option]"
		exit 1
esac

#if [ $1 == "start" ]; then
#	docker-compose up -d && npm start
#else
#if [ $1 == "stop" ]; then
#	docker-compose stop


#docker-compose stop && docker-compose rm -f
#echo "Feitoria!"

