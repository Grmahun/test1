Browser("IPMS Login").Page("IPMS Login").WebEdit("j_username").Set "admin"
Browser("IPMS Login").Page("IPMS Login").WebEdit("j_password").SetSecure "5910b3ec425c081e9db233c13b6aa14a"
Browser("IPMS Login").Page("IPMS Login").WebButton("Login").Click
Browser("IPMS Login").Page("IPMS").Image("business").Click
Browser("IPMS Login").Page("IPMS_2").Image("care%20model").Click
Browser("IPMS Login").Page("IPMS_3").Link("SSNRI Project (NGACO)").Click
Browser("IPMS Login").Page("IPMS_4").Link("Group Dashboard").Click
Browser("IPMS Login").Page("IPMS").Link("Logout").Click
