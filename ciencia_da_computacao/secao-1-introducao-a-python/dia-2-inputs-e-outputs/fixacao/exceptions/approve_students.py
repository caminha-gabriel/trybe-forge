try:
    students_file = open("students_grades.txt", mode="r")
    students_and_grades_list = [line.strip().split() for line in students_file]
    disapproved_students = []
    for student_info in students_and_grades_list:
        if int(student_info[1]) < 6:
            disapproved_students.append(student_info[0])

    disapproved_file = open("disapproved_students.txt", mode="w")
    for student in disapproved_students:
        disapproved_file.write(f"{student}\n")
except OSError:
    print("File inexistent")
else:
    students_file.close()
    print("File manipulated and closed")
finally:
    print('Trying to manipulate files')
