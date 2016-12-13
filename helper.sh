case "$1" in
	start)
		echo "starting docker and node service"
		docker-compose up -d 
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
	lint)
		echo "running ESLint on $2"
		./node_modules/.bin/eslint "$2" --fix
	;;
	lintall)
		echo "linting files"
		./node_modules/.bin/eslint server.js --fix
		./node_modules/.bin/eslint "/api" --fix
		./node_modules/.bin/eslint "/model" --fix
	;;
	node)
		echo "starting npm"
		node index.js --require
	;;
	nodemon)
		echo "starting nodemon"
		./node_modules/nodemon/bin/nodemon.js server.js
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

