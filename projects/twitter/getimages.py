from bs4 import BeautifulSoup
import requests
import random
import csv
import sys


def get_proxy_list():
    proxysite = requests.get('https://free-proxy-list.net/')
    proxysoup = BeautifulSoup(proxysite.content, 'html.parser')
    proxybody = proxysoup.find('tbody')
    tr = proxybody.find_all('tr')
    for i in tr:
        td = i.find_all('td')
        PROXY_LIST.append(str(td[0].text)+':'+str(td[1].text))
    print(10*" > ", "Got new proxies")


if __name__ == "__main__":

    username = []
    img_url = []
    CSVFILE = open(sys.argv[1], 'r')
    NOTFOUND = open('notfound.txt', 'a')
    csvreader = csv.reader(CSVFILE)

    for row in csvreader:
        img_url.append(row[2])
        username.append(row[0][1:])

    PROXY_LIST = []
    get_proxy_list()

    USER_AGENT = [
        'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0',
        'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:64.0) Gecko/20100101 Firefox/64.0',
        'Mozilla/5.0 (X11; Linux i686; rv:64.0) Gecko/20100101 Firefox/64.0',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14931',
    ]

    users_done = 0

    for i in range(len(img_url)):

        theprxy = random.choice(PROXY_LIST)
        PROXY_LIST.remove(theprxy)
        if len(PROXY_LIST) == 250:
            del PROXY_LIST[:]
            get_proxy_list()

        if img_url[i][-4:] == 'jpeg':
            img = open(username[i]+img_url[i][-5:], 'wb')
        else:
            img = open(username[i]+img_url[i][-4:], 'wb')
        try:
            r = requests.get(img_url[i], headers={'User-Agent': random.choice(USER_AGENT)}, proxies = {'http': theprxy})
            img.write(r.content)
            users_done += 1
            print(username[i], str(users_done))
        except:
            NOTFOUND.write(img_url[i])
            print("\n", 10*" ! ", "Cant get ", username[i], "\n")

        img.close()

    NOTFOUND.close()
