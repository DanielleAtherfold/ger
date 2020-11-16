import yargs=require('yargs')
import calcWallStud from './calc' 

yargs.command( 

  'calc-wall-studs',  

  'calculate the amount of studs in a house',
  function(yargs){
      return yargs.options({
          w:{
            type:"number",
            alias:"width",
            description:"width of the house"
          },
          l:{ type:"number",
          alias:"length",
          description:"length of the house"

          }
      })
  },

  function (args){
    console.log(args.width,args.length)
      console.log(calcWallStud(Number(args.width),Number(args.length)))
  }
)

yargs.help().parse()
