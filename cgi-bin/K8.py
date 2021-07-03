#!/usr/bin/python3

print("content-type: text/html")
print()

import cgi
import subprocess

data = cgi.FieldStorage()
command = data.getvalue("cmd")
if ("get" in command or "show" in command) and ("pods" in command or "pod" in command):
    output = subprocess.getoutput("sudo kubectl get pods --kubeconfig /kube-ws/admin.conf")
elif ("deploy" in command or "deployment" in command) and ("launch" in command or "create" in command):
    output = subprocess.getoutput("sudo kubectl create deployment " + data.getvalue("y") + " --image=" + data.getvalue("z") + " --kubeconfig /kube-ws/admin.conf")
elif "expose" in command:
    output = subprocess.getoutput("sudo kubectl expose deployment "+ data.getvalue("y") +" --type=NodePort --port=" + data.getvalue("z") + " --kubeconfig /kube-ws/admin.conf")
elif "delete" in command and ("environment" in command or "all" in command):
    output = subprocess.getoutput("sudo kubectl delete --all all --kubeconfig /kube-ws/admin.conf")
elif "delete" in command and ("deployment" in command):
    output = subprocess.getoutput("sudo kubectl delete deployments " + data.getvalue("y") + " --kubeconfig /kube-ws/admin.conf")
else:
    output = "Sorry, Command not found..."
    
print(output)      
