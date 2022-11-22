#importing pandas as pd
import pandas as pd
  
# Read and store content
# of an excel file 
read_file = pd.read_excel ("F255_04_VEH_KPIs.xlsx")
  
# Write the dataframe object
# into csv file
read_file.to_csv ("F255_04_VEH_KPIs.csv", 
                  index = None,
                  header=True)
    
# read csv file and convert 
# into a dataframe object
df = pd.DataFrame(pd.read_csv("F255_04_VEH_KPIs.csv"))
  
# show the dataframe
df