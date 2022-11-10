import sqlite3
import pandas as pd
# создаем базу данных и устанавливаем соединение с ней
con = sqlite3.connect("booking.sqlite")
cur = con.cursor()
# открываем файл с дампом базой двнных
f_damp = open('C:\my.db','r', encoding ='utf-8-sig')
# читаем данные из файла
damp = f_damp.read()
# закрываем файл с дампом
f_damp.close()
# запускаем запросы 

con.executescript(damp)
# сохраняем информацию в базе данных
con.commit()

#1.1 вывести номера всех забронированных столиков и их вместимость после 15:00, сортировать по убыванию времени бронирования
df = pd.read_sql(''' 
SELECT desk_numb, desk_amount, booking_time FROM booking, desk
WHERE booking.desk_id = desk.desk_id AND booking.booking_time > "15:00"
ORDER BY booking_time DESC
''', con )
print(df)

#1.2 вывести расположение всех забронированных столиков, сортировать по возрастанию времени бронирования
df = pd.read_sql(''' 
SELECT place_floor, place_window, desk_numb, booking_time FROM booking, place
INNER JOIN desk WHERE booking.desk_id = desk.desk_id AND desk.desk_id = place.place_id
ORDER BY booking_time
''', con )
print(df)

#2.1 вывксти количество всех забронированных столиков с группировкой по времени
df = pd.read_sql(''' 
SELECT desk_numb, desk_amount, booking_time, count(DISTINCT booking_time) AS count FROM booking
INNER JOIN desk ON booking.desk_id = desk.desk_id  
GROUP BY booking_time
''', con )
print(df)

#2.2 вывести количество всех забронированных столиков с группировкой по расположению на этаже
df = pd.read_sql(''' 
SELECT place_floor, count(place_floor) AS count FROM booking, place
INNER JOIN desk ON booking.desk_id = desk.desk_id AND desk.desk_id = place.place_id
GROUP BY place_floor
''', con )
print(df)

#3.1 вывести информацию о всех забронированных столиков, где количество забронированных мест больше, чем вместимость столика под номром 1
df = pd.read_sql(''' 
SELECT desk_numb, desk_amount, booking_time FROM booking, desk
WHERE booking.desk_id = desk.desk_id AND booking.booking_amount > (SELECT desk_amount FROM desk WHERE desk_numb = "1")
ORDER BY booking_time DESC
''', con )
print(df)

#3.2 вывести информацию о всех забронированных столиков
df = pd.read_sql(''' 
WITH booking_info AS (
    SELECT desk_id, guest_id, schedule_id, booking_date, booking_time, booking_amount FROM booking
    WHERE booking.guest_id != "None" 
)
SELECT * FROM booking_info 
''', con )
print(df)

#4.1 изменить количество мест у столика 1 на 1 
cur.execute('''UPDATE desk
SET desk_amount = 1 WHERE desk_id = 1 ''')

df = pd.read_sql(''' 
select desk_id, desk_amount, desk_numb from desk
''', con )
print(df)

#4.2 удалить столики, количество мест у которых больше 5
cur.execute('''DELETE FROM desk
WHERE desk_amount > 5 ''')

df = pd.read_sql(''' 
select desk_id, desk_amount, desk_numb from desk
''', con )
print(df)












# закрываем соединение с базой
con.close()

