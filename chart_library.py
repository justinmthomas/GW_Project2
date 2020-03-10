import pandas as pd
import plotly.graph_objects as go
import plotly.io as pio
import plotly.express as px
import numpy as np

url="https://gwprojectflask.herokuapp.com/api/data/raw_results"
df = pd.read_json(url)
# df.head()

a=df['Data_Type']
c=df['Chart_Type']
b=df['Correct']

def bar_function(x,y): 

    aggs = ["count","sum","avg","median","mode","rms","stddev","min","max","first","last"]

    agg = []
    agg_func = []
    for i in range(0, len(aggs)):
        agg = dict(
            args=['transforms[0].aggregations[0].func', aggs[i],
            'transforms[0].aggregations[1].func', aggs[i]],
            label=aggs[i],
            method='restyle'
        )
        agg_func.append(agg)

    return{
    'data' : [dict(
        type = 'bar',
        x = x,
        y = y,
        text = y,
        textposition='outside',
        transforms = [dict(
            type = 'aggregate',
            groups = x,
            aggregations = [
                dict(
                target = 'y', func = 'sum', enabled = True),
                dict(
                target = 'text', func = 'count', enabled = True),
                ]),
            # dict(
            # type = 'aggregate',
            # groups = x,
            # aggregations = [
            #     dict(
            #     target = 'text', func = 'count', enabled = True),
            #     ]
            # )
            ]

        )],

    'layout' : dict(
        title = '<b>Plotly Aggregations</b><br>use dropdown to change aggregation',
        xaxis = dict(title = x.name),
        yaxis = dict(title = y.name),
        updatemenus = [dict(
                yanchor = 'top',
                active = 1,
                showactive = False,
                buttons = agg_func
            )]
        )
    }


def line_function(x,y): 

    aggs = ["count","sum","avg","median","mode","rms","stddev","min","max","first","last"]

    agg = []
    agg_func = []
    for i in range(0, len(aggs)):
        agg = dict(
            args=['transforms[0].aggregations[0].func', aggs[i]],
            label=aggs[i],
            method='restyle'
        )
        agg_func.append(agg)


    return{
    'data' : [dict(
        type = 'line',
        x = x,
        y = y,
        text = y,
        textposition='auto',
        transforms = [dict(
            type = 'aggregate',
            groups = x,
            aggregations = [
                dict(
                target = 'y', func = 'sum', enabled = True),
                # dict(
                # target = 'text', func = 'sum', enabled = True)
                ]
            )]
        )],

    'layout' : dict(
        title = '<b>Plotly Aggregations</b><br>use dropdown to change aggregation',
        xaxis = dict(title = 'Column A Header'),
        yaxis = dict(title = 'Column B Header'),
        updatemenus = [dict(
                yanchor = 'top',
                active = 1,
                showactive = False,
                buttons = agg_func
            )]
        )
    }




def pie_function(x,y): 

    aggs = ["count","sum","avg","median","mode","rms","stddev","min","max","first","last"]

    agg = []
    agg_func = []
    for i in range(0, len(aggs)):
        agg = dict(
            args=['transforms[0].aggregations[0].func', aggs[i]],
            label=aggs[i],
            method='restyle'
        )
        agg_func.append(agg)
        
    return{
        'data' : [dict(
            type = 'pie',
            labels = x,
            values = y,
            text = x,
            textposition='auto',
            transforms = [dict(
                type = 'aggregate',
                groups = x,
                aggregations = [
                    dict(
                    target = 'values', func = 'sum', enabled = True),
                    ]
                )]
            )],

        'layout' : dict(
            title = f"<b>{x.name} by Number {y.name}</b><br>use dropdown to change aggregation",
            updatemenus = [dict(
                    yanchor = 'top',
                    active = 1,
                    showactive = False,
                    buttons = agg_func
                )]
            )
        }

# def bubble_function(x,y): 

#     aggs = ["count","sum","avg","median","mode","rms","stddev","min","max","first","last"]

#     agg = []
#     agg_func = []
#     for i in range(0, len(aggs)):
#         agg = dict(
#             args=['transforms[0].aggregations[0].func', aggs[i]],
#             label=aggs[i],
#             method='restyle'
#         )
#         agg_func.append(agg)
        
#     return{
#     'data' : [dict(
#         type = 'bubble',
#         x = x,
#         y = y,
#         text = y,
#         textposition='auto',
#         transforms = [dict(
#             type = 'aggregate',
#             groups = x,
#             aggregations = [
#                 dict(
#                 target = 'y', func = 'sum', enabled = True),
#                 # dict(
#                 # target = 'text', func = 'sum', enabled = True)
#                 ]
#             )]
#         )],

#     'layout' : dict(
#         title = '<b>Plotly Aggregations</b><br>use dropdown to change aggregation',
#         xaxis = dict(title = 'Column A Header'),
#         yaxis = dict(title = 'Column B Header'),
#         updatemenus = [dict(
#                 yanchor = 'top',
#                 active = 1,
#                 showactive = False,
#                 buttons = agg_func
#             )]
#         )
#     }
# def scatter_function(x,y,s): 

#     aggs = ["count","sum","avg","median","mode","rms","stddev","min","max","first","last"]

#     agg = []
#     agg_func = []
#     for i in range(0, len(aggs)):
#         agg = dict(
#             args=['transforms[0].aggregations[0].func', aggs[i]],
#             label=aggs[i],
#             method='restyle'
#         )
#         agg_func.append(agg)


#     return{
#     'data' : px.scatter [dict(
#         x = x,
#         y = y,
#         # color = s,
#         # textposition='auto',
#         # transforms = [dict(
#         #     type = 'aggregate',
#         #     groups = x,
#         #     aggregations = [
#         #         dict(
#         #         target = 'y', func = 'sum', enabled = True),
#         #         # dict(
#         #         # target = 'text', func = 'sum', enabled = True)
#         #         ]
#         #     )]
#         )],

#     'layout' : dict(
#         title = '<b>Plotly Aggregations</b><br>use dropdown to change aggregation',
#         xaxis = dict(title = 'Column A Header'),
#         yaxis = dict(title = 'Column B Header'),
#         updatemenus = [dict(
#                 yanchor = 'top',
#                 active = 1,
#                 showactive = False,
#                 buttons = agg_func
#             )]
#         )
#     }

# Plotly.scatter_function(a,b)
# data.show(line_function(a,b))

# def scatter_function(x,y,s): 

    # aggs = ["count","sum","avg","median","mode","rms","stddev","min","max","first","last"]

    # agg = []
    # agg_func = []
    # for i in range(0, len(aggs)):
    #     agg = dict(
    #         args=['transforms[0].aggregations[0].func', aggs[i]],
    #         label=aggs[i],
    #         method='restyle'
    #     )
    #     agg_func.append(agg)
        
    # 'layout' : dict(
    #     title = '<b>Plotly Aggregations</b><br>use dropdown to change aggregation',
    #     xaxis = dict(title = 'Column A Header'),
    #     yaxis = dict(title = 'Column B Header'),
    #     updatemenus = [dict(
    #             yanchor = 'top',
    #             active = 1,
    #             showactive = False,
    #             buttons = agg_func
    #         )]
    #     )
    # }
def scatter_function(x,y): 
    return px.scatter (
        x = x,
        y = y)
        
    
# def scatter_function(x,y,s): 
#     return{
#         px.scatter(
#            x= x
#           y= y) 
#     }
   
                    #  size=s)
                    #  color=x,
                    #  hover_name=x,
                    #  log_x=True)
                    #  size_max=60)
    
# fig.show() 

def bubble_function (x,y):
    # g=pd.Series(y)
    # t=pd.cut(y, bins=6).max()
    # print (t)
    categories, edges = pd.cut(y, 6, retbins=True, duplicates='drop', labels=False)
    df = pd.DataFrame({'original':y,
                   'bin_max': edges[1:][categories]},
                  columns = ['original', 'bin_max'])
    s = df['bin_max'].unique()

    return px.scatter(
        x=x,
        y=y,
        size=y
        # color=[0, 1, 2, 3]
    )

#  
# def map_function (map):
#     return {
#         df.scatter_geo( 
#         locations=x,
#         color=x, 
#         hover_name=y, 
#         size="pop",
#         animation_frame="year", 
#         projection="natural earth")
#     }