def simple_calculator(num1, num2, operation):
    if operation == "addition":
        return num1 + num2
    elif operation == "deduction":
        return num1 - num2
    elif operation == "multiply":
        return num1 * num2
    elif operation == "divide":
        if num2 == 0:
            return "its mistake because you cant divide 0"
        else:
            return num1 / num2
    else:
        return "its mistake"